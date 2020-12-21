package com.agagnier.menugenerator.model

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column

object Users : IntIdTable("users", "userid") {
    val firstname: Column<String> = varchar("firstname", 255)
    val lastname: Column<String> = varchar("lastname", 255)
}

class User(userId: EntityID<Int>) : IntEntity(userId) {
    companion object : IntEntityClass<User>(Users)

    var firstname by Users.firstname
    var lastname by Users.lastname
}