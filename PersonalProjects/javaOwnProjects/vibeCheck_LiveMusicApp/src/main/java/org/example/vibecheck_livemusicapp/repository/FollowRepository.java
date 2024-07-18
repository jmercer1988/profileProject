package org.example.vibecheck_livemusicapp.repository;
import org.example.vibecheck_livemusicapp.entity.vibeBand;
import org.example.vibecheck_livemusicapp.entity.vibeFollow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FollowRepository extends JpaRepository<vibeFollow, Long> {
//    @Query("SELECT f.vibeband FROM vibeFollow f WHERE f.vibeuser.id = :userId")
//    List<vibeBand> findBandsByUserId(@Param("userId") Long userId);
}
