package com.psuti.Mironov.dao.SimberDAO.UserDAO;

import com.psuti.Mironov.entity.SimberEnitity.UserEntities.UserList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserListRepository extends JpaRepository<UserList, UUID> {
}
