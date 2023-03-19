package com.psuti.Mironov.dao.SimberDAO;

import com.psuti.Mironov.entity.SimberEnitity.WishList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface WishListRepository extends JpaRepository<WishList, UUID> {
}
