// Largest Element in an array
package arrayBasic;

public class LargestElement {
	
	public static int largestElement (int[] arr) {
		int res = 0;
		
		for(int i = 0; i < arr.length; i++) {
			if(arr[i] > arr[res]) {
				res = i;
			}
		}
		return res;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("hello world");
		int [] arr = {1, 2, 3, 4, 5};
		int res = largestElement(arr);
		System.out.println(res);
		
	}

}
