package com.psuti.Mironov.dao.SimberDAO.UserDAO;

import com.psuti.Mironov.entity.SimberEnitity.UserEntities.UserValueCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserValueCategoryRepository extends JpaRepository<UserValueCategory, UUID> {
}
