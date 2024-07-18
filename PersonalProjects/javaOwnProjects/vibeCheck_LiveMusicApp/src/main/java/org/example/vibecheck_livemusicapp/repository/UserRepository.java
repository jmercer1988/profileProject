package org.example.vibecheck_livemusicapp.repository;
import org.example.vibecheck_livemusicapp.entity.vibeEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.example.vibecheck_livemusicapp.entity.vibeUser;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<vibeUser, Long>{
    //define custom queries here.

    // !! -- attention needed: findByBandName method required.
//    List<vibeEvent> findByBandName(String bandName);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
}