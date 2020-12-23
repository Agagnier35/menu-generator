package com.agagnier.menugenerator.api

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.ViewResolver
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import org.springframework.web.servlet.view.InternalResourceView
import org.springframework.web.servlet.view.UrlBasedViewResolver

@Configuration
open class ReactConfiguration : WebMvcConfigurer {
    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("/index.html").addResourceLocations("classpath:/static/index.html")
        registry.addResourceHandler("/*.*").addResourceLocations("classpath:/static/")
        super.addResourceHandlers(registry)
    }

    @Bean
    open fun viewResolver(): ViewResolver {
        val viewResolver = UrlBasedViewResolver();
        viewResolver.setViewClass(InternalResourceView::class.java)
        return viewResolver
    }
}