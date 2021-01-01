package com.agagnier.menugenerator.backend.services

import com.agagnier.menugenerator.backend.dto.*
import com.agagnier.menugenerator.model.Ingredient
import com.agagnier.menugenerator.model.Recipe
import com.agagnier.menugenerator.model.RecipeIngredient
import com.agagnier.menugenerator.model.RecipeStep
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

    fun deleteRecipe(recipeId: Int, deleteImg: (String) -> Boolean): Boolean =
        transaction {
            Recipe.findById(recipeId)?.let { it ->
                it.thumbnail?.let(deleteImg)
                it.delete()
                true
            } ?: false
        }

    fun addSteps(recipeId: Int, steps: List<StepDto>): List<StepDto> =
        transaction {
            steps.map {
                RecipeStep.new {
                    recipe = Recipe.findById(recipeId)!!
                    order = it.stepNumber
                    description = it.description
                    section = it.section
                }
            }.map { toStepDto(it) }
        }

    fun addIngredients(recipeId: Int, ings: List<IngredientDto>): List<IngredientDto> =
        transaction {
            ings.map {
                RecipeIngredient.new {
                    recipe = Recipe.findById(recipeId)!!
                    ingredient = Ingredient.new {
                        name = it.name
                    }
                    quantity = it.quantity
                    unit = it.unit
                    section = it.section
                }
            }.map { toIngredientDto(it) }
        }

}