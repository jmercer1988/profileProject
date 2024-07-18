package org.example.vibecheck_livemusicapp.repository;
import org.example.vibecheck_livemusicapp.entity.vibeEvent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<vibeEvent, Long> {
//    List<vibeEvent> findByNameContaining(String name);
//    List<vibeEvent> findByDate(LocalDate date);
//    List<vibeEvent> findByDateBetween(LocalDate startDate, LocalDate endDate);
//    List<vibeEvent> findByLocation(String location);
//    Page<vibeEvent> findAll(Pageable pageable);
//    // Other custom query methods...
}