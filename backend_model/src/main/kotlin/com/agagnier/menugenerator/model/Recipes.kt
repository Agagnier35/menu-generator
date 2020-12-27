package com.agagnier.menugenerator.model

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable

object Recipes : IntIdTable("recipes", "recipeid") {
    val recipeName = varchar("recipeName", 255)
    val origin = varchar("origin", 255).nullable()
    val thumbnail = varchar("thumbnail", 255).nullable()
}

class Recipe(recipeId: EntityID<Int>) : IntEntity(recipeId) {
    companion object : IntEntityClass<Recipe>(Recipes)

    var recipeName by Recipes.recipeName
    var origin by Recipes.origin
    var thumbnail by Recipes.thumbnail

    val ingredients by RecipeIngredient referrersOn RecipeIngredients.recipeid
    val steps by RecipeStep referrersOn RecipeSteps.recipeid
}





