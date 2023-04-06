package com.psuti.Mironov.dao.SimberDAO.UserDAO;

import com.psuti.Mironov.entity.SimberEnitity.UserEntities.UserAddress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserAddressRepository extends JpaRepository<UserAddress, UUID> {
}
