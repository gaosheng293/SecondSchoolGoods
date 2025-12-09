package com.demoxiaoyuan.back.config;

import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.unit.DataSize;

import javax.servlet.MultipartConfigElement;

@Configuration
public class FileUploadConfig {

    @Bean
    public MultipartConfigElement multipartConfigElement() {
        MultipartConfigFactory factory = new MultipartConfigFactory();

        // 单个文件最大 30MB（够用一辈子）
        factory.setMaxFileSize(DataSize.ofMegabytes(30));

        // 一次请求总大小 100MB（支持一次传9张大图）
        factory.setMaxRequestSize(DataSize.ofMegabytes(100));

        return factory.createMultipartConfig();
    }
}