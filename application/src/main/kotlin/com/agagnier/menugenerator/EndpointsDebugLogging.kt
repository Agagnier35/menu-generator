package com.agagnier.menugenerator

import org.springframework.context.ApplicationContext
import org.springframework.context.ApplicationListener
import org.springframework.context.event.ContextRefreshedEvent
import org.springframework.stereotype.Component
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping


@Component
class EndpointsDebugLogging : ApplicationListener<ContextRefreshedEvent> {
    override fun onApplicationEvent(event: ContextRefreshedEvent) {
        val applicationContext: ApplicationContext = event.applicationContext
        applicationContext.getBean(RequestMappingHandlerMapping::class.java).handlerMethods
            .forEach { (k, v) ->  println("Endpoint: ${k.patternsCondition.toString()}, ${v.beanType.simpleName}.${v.method.name})") }

    }
}
