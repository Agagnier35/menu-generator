package com.agagnier.menugenerator.backend.services

import com.agagnier.createDatabase
import com.agagnier.menugenerator.backend.dto.UserDto
import com.agagnier.menugenerator.backend.dto.toUserDto
import com.agagnier.menugenerator.model.User
import com.agagnier.menugenerator.model.Users
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Service

@Service
class UsersService {
    fun getAllUsers(): List<UserDto> {
        createDatabase()

        var users = listOf<UserDto>()
        transaction {
            SchemaUtils.create(Users)

            users = User.all().map { toUserDto(it) }
        }
        return users;
    }
}


