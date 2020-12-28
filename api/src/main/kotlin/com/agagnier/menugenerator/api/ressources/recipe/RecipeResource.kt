package com.agagnier.menugenerator.api.ressources.recipe

import com.agagnier.menugenerator.backend.dto.RecipeDto
import com.agagnier.menugenerator.backend.services.CloudinaryService
import com.agagnier.menugenerator.backend.services.RecipesService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import java.io.File


@RestController
@RequestMapping("/api/recipes")
class RecipeResource @Autowired constructor(private val recipeService: RecipesService, private val cloudinaryService: CloudinaryService) {
    @GetMapping(produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getAllRecipes(): List<RecipeDto> {
        return recipeService.getAllRecipes()
    }

    @GetMapping(value = ["/{recipeId}"], produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getRecipe(@PathVariable recipeId: Int): ResponseEntity<RecipeDto> {
        return recipeService.getRecipe(recipeId)?.let { ResponseEntity.ok(it) } ?: ResponseEntity.notFound().build()
    }

    @PostMapping(produces = [MediaType.APPLICATION_JSON_VALUE], consumes = [MediaType.MULTIPART_FORM_DATA_VALUE])
    fun createRecipe(@RequestParam thumbnail: MultipartFile?, @RequestParam recipeName: String, @RequestParam origin: String?): ResponseEntity<RecipeDto> {
        var imgURL: String? = null
        if (thumbnail != null) {
            val imgTmpFile = File.createTempFile("thumbnail-", ".tmp")
            thumbnail.transferTo(imgTmpFile)
            imgURL = cloudinaryService.saveImage(imgTmpFile)
            imgTmpFile.deleteOnExit()
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(recipeService.createRecipe(recipeName, origin, imgURL));
    }
}