package com.psuti.Mironov.dao.SimberDAO;

import com.psuti.Mironov.entity.SimberEnitity.OfferList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface OfferListRepository extends JpaRepository<OfferList, UUID> {
}
