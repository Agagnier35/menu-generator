package com.agagnier.menugenerator.backend

import com.cloudinary.Cloudinary
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


var CLOUDINARY_URL = "CLOUDINARY_URL"

@Configuration
open class CloudinaryConfig {
    @Bean
    open fun cloudinaryBean() = Cloudinary(System.getenv(CLOUDINARY_URL))
}
