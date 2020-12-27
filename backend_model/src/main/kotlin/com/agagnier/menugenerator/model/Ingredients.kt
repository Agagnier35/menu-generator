package com.agagnier.menugenerator.model

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable

object Ingredients : IntIdTable("ingredients", "ingredientid") {
    val name = varchar("name", 255)
}

class Ingredient(ingredientId: EntityID<Int>) : IntEntity(ingredientId) {
    companion object : IntEntityClass<Ingredient>(Ingredients)

    var name by Ingredients.name
}