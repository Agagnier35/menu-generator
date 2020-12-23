package com.agagnier.menugenerator.api.ressources

import com.agagnier.menugenerator.backend.dto.UserDto
import com.agagnier.menugenerator.backend.services.UsersService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/users")
class ExempleAPIRessource @Autowired constructor(private val userService: UsersService) {


    @GetMapping(produces = ["application/json"])
    fun getUsers(): List<UserDto> = userService.getAllUsers();

    @GetMapping("/test", produces = ["application/json"])
    fun getUserTest(): String = "test";
}