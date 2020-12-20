package com.agagnier.menugenerator

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = ["com.agagnier.menugenerator"])
class MenuGeneratorApplication

fun main(args: Array<String>) {
    runApplication<MenuGeneratorApplication>(*args)
}
