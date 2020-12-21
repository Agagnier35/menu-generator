package com.agagnier

import org.jetbrains.exposed.sql.Database

var DATABASE_URL_PROPERTY = "JDBC_DATABASE_URL"
fun createDatabase(): Database {
    val url = System.getenv(DATABASE_URL_PROPERTY) ?: "jdbc:postgresql://localhost:5432/postgres?password=admin&user=postgres"
    return Database.connect(url)
}

