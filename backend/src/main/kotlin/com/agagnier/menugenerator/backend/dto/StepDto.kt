package com.agagnier.menugenerator.backend.dto

import com.agagnier.menugenerator.model.RecipeStep

data class StepDto(val stepId: Int, val stepNumber: Int, val description: String, val section: String?)

fun toStepDto(s: RecipeStep) = StepDto(s.id.value, s.order, s.description, s.section)