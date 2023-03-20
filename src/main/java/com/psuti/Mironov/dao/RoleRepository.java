package com.psuti.Mironov.dao;


import com.psuti.Mironov.entity.Role;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository <Role, String> {
}
