package com.agagnier.menugenerator.backend.services

import com.agagnier.menugenerator.backend.dto.UserDto
import com.agagnier.menugenerator.backend.dto.toUserDto
import com.agagnier.menugenerator.model.User
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Service

@Service
class UsersService {
    fun getAllUsers(): List<UserDto> {

        var users = listOf<UserDto>()
        transaction {
            users = User.all().map { toUserDto(it) }
        }

        return users;
    }
}


