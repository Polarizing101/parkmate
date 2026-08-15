package com.parkmate.repository;

import com.parkmate.entity.ParkingReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParkingReportRepository extends JpaRepository<ParkingReport, Long> {
}
