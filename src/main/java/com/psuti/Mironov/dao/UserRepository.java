package com.psuti.Mironov.dao;

<<<<<<< Updated upstream
import com.psuti.Mironov.entity.example.User;
=======
import com.psuti.Mironov.entity.User;
>>>>>>> Stashed changes
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findUserByEmail(String email);
    void removeByEmail(String email);

}
