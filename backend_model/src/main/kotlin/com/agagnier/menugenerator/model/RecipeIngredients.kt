package com.agagnier.menugenerator.model

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable

object RecipeIngredients : IntIdTable("recipeingredients", "recipeIngredientid") {
    val recipeid = reference("recipeId", Recipes.id)
    val ingredientid = reference("ingredientId", Ingredients.id)

    val quantity = integer("quantity")
    val unit = varchar("unit", 5)

    val section = varchar("section", 255).nullable()
}

class RecipeIngredient(recipeIngredientId: EntityID<Int>) : IntEntity(recipeIngredientId) {
    companion object : IntEntityClass<RecipeIngredient>(RecipeIngredients)

    val ingredient by Ingredient referencedOn Ingredients.id
    var quantity by RecipeIngredients.quantity
    var unit by RecipeIngredients.unit
    var section by RecipeIngredients.section
}