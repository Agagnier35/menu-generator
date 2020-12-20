package com.agagnier.menugenerator.api

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class RootController {
    init {
        println("Controller Initiliazed")
    }

    @GetMapping(produces = ["text/html"])
    fun getApp() = "<html><body>Allo ma boi</body></html>";

}