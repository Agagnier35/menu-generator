package com.agagnier.menugenerator.backend.dto

import com.agagnier.menugenerator.model.User

data class UserDto(val userId: Int, val firstName: String, val lastName: String)

fun toUserDto(u: User): UserDto = UserDto(u.id.value, u.firstname, u.lastname)