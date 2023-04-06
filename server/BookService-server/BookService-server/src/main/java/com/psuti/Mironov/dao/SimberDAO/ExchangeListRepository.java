package com.psuti.Mironov.dao.SimberDAO;

import com.psuti.Mironov.entity.SimberEnitity.ExchangeList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ExchangeListRepository extends JpaRepository<ExchangeList, UUID> {
}
