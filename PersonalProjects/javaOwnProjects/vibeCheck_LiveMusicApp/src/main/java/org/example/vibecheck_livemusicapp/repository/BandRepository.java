package org.example.vibecheck_livemusicapp.repository;

import org.example.vibecheck_livemusicapp.entity.vibeBand;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BandRepository extends JpaRepository<vibeBand, Long> {
}
