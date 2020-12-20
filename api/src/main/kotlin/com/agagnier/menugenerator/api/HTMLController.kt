package com.agagnier.menugenerator.api

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class HTMLController {
    @GetMapping(produces = ["text/html"])
    fun getApp() = "<html><body>Allo ma boi</body></html>";

}