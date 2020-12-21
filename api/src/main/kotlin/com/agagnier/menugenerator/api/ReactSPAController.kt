package com.agagnier.menugenerator.api

import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.servlet.NoHandlerFoundException


@ControllerAdvice
class ReactSPAController {
    @ExceptionHandler(NoHandlerFoundException::class)
    fun handleError404(): String = "index.html"
}