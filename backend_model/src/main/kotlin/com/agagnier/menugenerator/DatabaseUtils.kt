package com.agagnier.menugenerator

import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.transactions.transaction

var DATABASE_URL_PROPERTY = "JDBC_DATABASE_URL"
fun createDatabase(): Database {
    val url =
        System.getenv(DATABASE_URL_PROPERTY) ?: "jdbc:postgresql://localhost:5432/postgres?password=admin&user=postgres"
    return Database.connect(url)
}

fun debugTransaction(content: () -> Unit) {
    transaction {
        addLogger(StdOutSqlLogger)
        content()
    }
}

