package com.agagnier.menugenerator.api

import org.springframework.http.MediaType
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import javax.servlet.http.HttpServletResponse


@Controller
class HTMLController {
    @GetMapping(produces = [MediaType.TEXT_HTML_VALUE])
    fun getApp(response: HttpServletResponse): String {
        response.setHeader("Cache-Control", "no-store")
        return "index.html"
    }
}