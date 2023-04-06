package com.psuti.Mironov.dao.SimberDAO.UserDAO;

import com.psuti.Mironov.entity.SimberEnitity.UserEntities.UserExchangeList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserExchangeListRepository extends JpaRepository<UserExchangeList, UUID> {
}
