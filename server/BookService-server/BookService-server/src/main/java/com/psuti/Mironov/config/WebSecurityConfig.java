package com.psuti.Mironov.config;

import com.psuti.Mironov.service.ConfirmFilter;
import com.psuti.Mironov.service.UserVerificationFilter;
import com.psuti.Mironov.service.security.SuccessLogoutHandlerImpl;
import com.psuti.Mironov.service.token.JwtAuthenticationEntryPoint;
import com.psuti.Mironov.service.token.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;

@Configuration
@CrossOrigin(origins = "http://localhost:3000" )
public class WebSecurityConfig implements WebMvcConfigurer {
    private final UserDetailsService userDetailsService;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtRequestFilter jwtRequestFilter;
    private final UserVerificationFilter userVerificationFilter;
    private final ConfirmFilter confirmFilter;
    @Autowired
    public WebSecurityConfig(UserDetailsService userDetailsService,
                             JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
                             JwtRequestFilter jwtRequestFilter,
                             UserVerificationFilter userVerificationFilter, ConfirmFilter confirmFilter) {
        this.userDetailsService = userDetailsService;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtRequestFilter = jwtRequestFilter;
        this.userVerificationFilter = userVerificationFilter;
        this.confirmFilter = confirmFilter;
    }
    @Bean
    SecurityFilterChain web(HttpSecurity http, SuccessLogoutHandlerImpl successLogoutHandler) throws Exception {
        http
                .cors().and()
                .csrf()
                .disable()
                .authorizeHttpRequests(
                        (authorize) -> authorize
                                .antMatchers("/auth/login", "/auth/reg/", "/auth/reg/mail").permitAll()

                                .antMatchers(HttpMethod.POST,"/users").hasRole("ADMIN")
                                .antMatchers(HttpMethod.POST,"/users").hasRole("MODERATOR")
                                .antMatchers(HttpMethod.PUT,"/users/*").hasRole("ADMIN")
                                .antMatchers(HttpMethod.PUT,"/users/*").hasRole("MODERATOR")

                                .antMatchers(HttpMethod.DELETE,"/users/*").hasRole("ADMIN")
                                .antMatchers(HttpMethod.DELETE,"/users/*").hasRole("MODERATOR")

                                .antMatchers(HttpMethod.GET,"/users").permitAll()
                                .antMatchers(HttpMethod.GET,"/users/*").permitAll()

                                .anyRequest().authenticated()
                )
                .logout(logout -> logout
                                .logoutUrl("/auth/logout")
                                .deleteCookies("JSESSION")
                                .invalidateHttpSession(true)
                                .logoutSuccessHandler(successLogoutHandler)
                )
                .userDetailsService(userDetailsService)
                .exceptionHandling()
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilterAfter(userVerificationFilter, UsernamePasswordAuthenticationFilter.class)
                .addFilterAfter(confirmFilter, UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("*");
    }

    @Bean
    AuthenticationManager authenticationManagerBean(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
