package com.agagnier.menugenerator

import com.agagnier.menugenerator.model.*
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.StdOutSqlLogger
import org.jetbrains.exposed.sql.addLogger
import org.jetbrains.exposed.sql.transactions.transaction

var DATABASE_URL_PROPERTY = "JDBC_DATABASE_URL"
fun createDatabase(): Database {
    val url =
        System.getenv(DATABASE_URL_PROPERTY) ?: "jdbc:postgresql://localhost:5432/postgres?password=admin&user=postgres"
    return Database.connect(url)
}

fun initTables() {
    transaction { SchemaUtils.create(Users, Ingredients, RecipeIngredients, RecipeSteps, Recipes) }
}

fun debugTransaction(content: () -> Unit) {
    transaction {
        addLogger(StdOutSqlLogger)
        content()
    }
}

