package BackendServer.Listings.Entities;

import java.util.Date;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import org.json.JSONObject;

import BackendServer.Exceptions.NoImageGallerySupportedException;
import BackendServer.Exceptions.WrongFormatException;
import BackendServer.Listings.Constants;
import BackendServer.Listings.SimpleMethods;

/**This class represents Listings with listingType SellItem*/
@Entity
@Table(name="BorrowRequest")
@PrimaryKeyJoinColumn(referencedColumnName="id")
public class BorrowRequest extends RequestListing{
	private Date borrowFromDate;
	private Date borrowToDate;
	private String picture;
	
	public Date getBorrowFromDate() {
		return borrowFromDate;
	}

	public void setBorrowFromDate(Date borrowFromDate) {
		this.borrowFromDate = borrowFromDate;
	}

	public Date getBorrowToDate() {
		return borrowToDate;
	}

	public void setBorrowToDate(Date borrowToDate) {
		this.borrowToDate = borrowToDate;
	}

	public BorrowRequest(){
		this.setType(Constants.listingTypeNameBorrowRequest);
	}
	
	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}
	
	@Override
	public void fillFields(JSONObject listingData, long creator) throws WrongFormatException {
		super.fillFields(listingData, creator);
		if(!listingData.isNull(Constants.listingDataFieldBorrowFromDate)){
			this.setBorrowFromDate(new Date(listingData.getLong(Constants.listingDataFieldBorrowFromDate)));
		}
		if(!listingData.isNull(Constants.listingDataFieldBorrowToDate)){
			this.setBorrowToDate(new Date(listingData.getLong(Constants.listingDataFieldBorrowToDate)));
		}
		if(!listingData.isNull(Constants.listingDataFieldPicture)){
			this.setPicture(listingData.getString(Constants.listingDataFieldPicture));
		}
	}
	
	public JSONObject toJSON() {
		JSONObject json = super.toJSON();
		json.accumulate(Constants.listingDataFieldPicture, this.getPicture());
		json.accumulate(Constants.listingDataFieldBorrowFromDate, this.getBorrowFromDate());
		json.accumulate(Constants.listingDataFieldBorrowToDate, this.getBorrowToDate());
		return json;
	}
	
}
