package com.agagnier.menugenerator.model

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable

object RecipeSteps : IntIdTable("recipesteps", "stepId") {
    val recipeid = reference("recipeid", Recipes)

    val order = integer("order")
    val description = varchar("description", 255)

    val section = varchar("section", 255).nullable()
}

class RecipeStep(stepId: EntityID<Int>) : IntEntity(stepId) {
    companion object : IntEntityClass<RecipeStep>(RecipeSteps)

    var order by RecipeSteps.order
    var description by RecipeSteps.description
    var section by RecipeSteps.section
}