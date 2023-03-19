package com.psuti.Mironov.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegDto extends AuthDto {
    private String firstname;
    private String lastname;
<<<<<<< Updated upstream
=======
    private String username;
>>>>>>> Stashed changes
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private UUID id;
}



