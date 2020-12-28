package com.agagnier.menugenerator.backend.dto

import com.agagnier.menugenerator.model.Recipe

data class RecipeDto(val id: Int, val name: String, val origin: String?, val thumbnail: String?, val ingredients: List<IngredientDto>, val steps: List<StepDto>)

fun toRecipeDto(r: Recipe) =
    RecipeDto(r.id.value, r.recipeName, r.origin, r.thumbnail, r.ingredients.map { toIngredientDto(it) }, r.steps.map { toStepDto(it) })