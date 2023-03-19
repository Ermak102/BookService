package com.psuti.Mironov.dao.SimberDAO;

import com.psuti.Mironov.entity.SimberEnitity.BookLiterature;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BookLiteratureRepository extends JpaRepository<BookLiterature, UUID> {
}
