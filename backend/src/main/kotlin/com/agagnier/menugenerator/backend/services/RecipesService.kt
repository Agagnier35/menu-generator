package com.agagnier.menugenerator.backend.services

import com.agagnier.menugenerator.backend.dto.RecipeDto
import com.agagnier.menugenerator.backend.dto.toRecipeDto
import com.agagnier.menugenerator.model.Recipe
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Service

@Service
class RecipesService {
    fun getAllRecipes(): List<RecipeDto> = transaction { Recipe.all().map { toRecipeDto(it) } }

    fun getRecipe(recipeId: Int): RecipeDto? = transaction { Recipe.findById(recipeId)?.let { toRecipeDto(it) } }
    fun createRecipe(recipeName: String, origin: String?, imgURL: String?) =
        transaction {
            toRecipeDto(Recipe.new {
                this.recipeName = recipeName;
                this.origin = origin
                thumbnail = imgURL
            })
        }
}