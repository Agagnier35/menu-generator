package com.agagnier.menugenerator

import com.agagnier.menugenerator.model.Users
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = ["com.agagnier.menugenerator"])
class MenuGeneratorApplication

fun main(args: Array<String>) {
    runApplication<MenuGeneratorApplication>(*args)
    createDatabase()
    transaction { SchemaUtils.create(Users) }
}
