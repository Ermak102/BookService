package com.psuti.Mironov.dao.SimberDAO;

import com.psuti.Mironov.entity.SimberEnitity.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StatusRepository extends JpaRepository<Status, UUID> {
}
