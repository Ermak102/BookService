package com.psuti.Mironov.dao.SimberDAO.UserDAO;

import com.psuti.Mironov.entity.SimberEnitity.UserEntities.UserMessage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserMessageRepository extends JpaRepository<UserMessage, UUID> {
}
