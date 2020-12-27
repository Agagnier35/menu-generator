package com.agagnier.menugenerator.backend

import com.cloudinary.Cloudinary
import org.springframework.context.annotation.Bean


var CLOUDINARY_URL = "CLOUDINARY_URL"

@Bean
fun cloudinary() = Cloudinary(System.getenv(CLOUDINARY_URL))
