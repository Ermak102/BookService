package com.psuti.Mironov.dao.SimberDAO;

import com.psuti.Mironov.entity.SimberEnitity.BookResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BookResponseRepository extends JpaRepository<BookResponse, UUID> {
}
