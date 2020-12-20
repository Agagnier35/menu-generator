package com.agagnier.menugenerator.api.ressources

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/users")
class ExempleAPIRessource {
    init {
        println("base scanned")
    }

    @GetMapping("/{id}", produces = ["application/json"])
    fun getUserWithID(@PathVariable id: String): String = "{\"name\": \"${id}\"}"
}