package com.agagnier.menugenerator.backend.dto

import com.agagnier.menugenerator.model.RecipeIngredient

data class IngredientDto(val ingredientId: Int, val name: String, val quantity: Float, val unit: String, val section: String?)

fun toIngredientDto(i: RecipeIngredient) = IngredientDto(i.ingredient.id.value, i.ingredient.name, i.quantity, i.unit, i.section)