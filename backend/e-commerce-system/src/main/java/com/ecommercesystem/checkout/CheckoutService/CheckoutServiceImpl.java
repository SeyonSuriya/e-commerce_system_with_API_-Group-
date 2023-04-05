package com.ecommercesystem.checkout.CheckoutService;

import com.ecommercesystem.cart.CartRepo.cartRepo;
import com.ecommercesystem.checkout.CheckOutRepositories.CheckoutRepo;
import com.ecommercesystem.checkout.CheckOutRepositories.OrdersRepo;
import com.ecommercesystem.checkout.CheckoutDtos.CheckOutProductsDto;
import com.ecommercesystem.checkout.CheckoutDtos.SelectedProductsDto;
import com.ecommercesystem.checkout.entity.PurchaceDetails;
import com.ecommercesystem.product.productRepo.Booksrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class CheckoutServiceImpl implements CheckoutService{

    @Autowired
    private CheckoutRepo checkoutRepo;
    @Autowired
    private OrdersRepo ordersRepo;
    @Autowired
    private Booksrepo booksrepo;
    @Autowired
    private cartRepo cartrepo;

    List<CheckOutProductsDto> purchasingProducts=new ArrayList<CheckOutProductsDto>();
    @Override
    public List<CheckOutProductsDto> showCheckoutItems(List<SelectedProductsDto> selectedProductsDto, Integer userid) {

        List<CheckOutProductsDto> products=new ArrayList<CheckOutProductsDto>();
        for (int i = 0; i< selectedProductsDto.size(); i++){
            CheckOutProductsDto checkOutProductDto= new CheckOutProductsDto();
            checkOutProductDto.setProduct(checkoutRepo.getProductDetails(selectedProductsDto.get(i).getBook_id()));
            checkOutProductDto.setUnits(selectedProductsDto.get(i).getUnits());
            products.add(checkOutProductDto);
        }
        purchasingProducts=products;
        return products;
    }

    @Override
    public String placeorder(PurchaceDetails purchaceDetails) {
        Integer orderid=0;
        Integer reference=0;
        if (ordersRepo.getNextOrderId()==null){
            orderid=1;
        }else {
            orderid=ordersRepo.getNextOrderId()+1;
        }
        Integer availableUnits=0;
        if (purchaceDetails.getPurchaceitems().size()>0) {
            for (int i = 0; i < purchaceDetails.getPurchaceitems().size(); i++) {
                if (ordersRepo.getNextReference()==null){
                    reference=1;
                }else {
                    reference=ordersRepo.getNextReference()+1;
                }
                availableUnits = booksrepo.getProductDetails(purchaceDetails.getPurchaceitems().get(i).getBook_id()).get(0).getNum_of_units();
                ordersRepo.purchaceItem(reference,purchaceDetails.getAddress(), purchaceDetails.getPurchaceitems().get(i).getBook_id(), booksrepo.getProductDetails(purchaceDetails.getPurchaceitems().get(i).getBook_id()).get(0).getBook_price() * purchaceDetails.getPurchaceitems().get(i).getUnits(), purchaceDetails.getPurchaceitems().get(i).getUnits(), orderid, purchaceDetails.getUserid());
                availableUnits -= purchaceDetails.getPurchaceitems().get(i).getUnits();
                checkoutRepo.updateAvailableUnits(purchaceDetails.getPurchaceitems().get(i).getBook_id(), availableUnits);
                cartrepo.removeFromcart(purchaceDetails.getPurchaceitems().get(i).getBook_id(),purchaceDetails.getUserid().intValue());
            }
            return orderid.toString();
        }else {
            return "Error";
        }

    }
}
