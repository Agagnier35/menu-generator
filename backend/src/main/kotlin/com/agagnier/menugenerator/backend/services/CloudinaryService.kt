package com.agagnier.menugenerator.backend.services

import com.cloudinary.Cloudinary
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.stereotype.Service
import java.io.File

@Service
class CloudinaryService @Autowired constructor(@Qualifier("cloudinaryBean") private val cloudinary: Cloudinary) {
    private val URL_RESPONSE_FIELD = "url"
    private val LOCATION = System.getenv("CLOUDINARY_FOLDER") ?: "DEV"

    fun saveImage(file: File): String {
        val params = mutableMapOf<Any, Any>()
        params["folder"] = LOCATION

        val res = cloudinary.uploader().upload(file, params)
        return res[URL_RESPONSE_FIELD] as String
    }
}